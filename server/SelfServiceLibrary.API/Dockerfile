#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["SelfServiceLibrary.API/SelfServiceLibrary.API.csproj", "SelfServiceLibrary.API/"]
COPY ["SelfServiceLibrary.BL/SelfServiceLibrary.BL.csproj", "SelfServiceLibrary.BL/"]
RUN dotnet restore "SelfServiceLibrary.API/SelfServiceLibrary.API.csproj"
COPY . .
WORKDIR "/src/SelfServiceLibrary.API"
RUN dotnet build "SelfServiceLibrary.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SelfServiceLibrary.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SelfServiceLibrary.API.dll"]