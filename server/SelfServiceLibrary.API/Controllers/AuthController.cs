﻿using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using SelfServiceLibrary.API.DTO;
using SelfServiceLibrary.API.Interfaces;
using SelfServiceLibrary.BL.Interfaces;

namespace SelfServiceLibrary.API.Controllers
{
    public class AuthController : BaseController
    {
        private readonly ITokenService _tokenService;
        private readonly IUserContextService _userContextService;

        public AuthController(ITokenService tokenService, IUserContextService userContextService)
        {
            _tokenService = tokenService;
            _userContextService = userContextService;
        }

        [HttpPost]
        [AllowAnonymous]
        public Task<SignInResponse> Login([FromBody] SignIn dto) =>
            _tokenService.GetToken(dto.Code ?? string.Empty);

        [HttpGet]
        public Task<BL.Model.UserContext> GetContext() =>
            _userContextService.GetInfo(User.Identity.Name);
    }
}
