﻿using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using SelfServiceLibrary.API.Services;
using SelfServiceLibrary.BL.DTO.Issue;
using SelfServiceLibrary.BL.Interfaces;

namespace SelfServiceLibrary.API.Controllers
{
    public class UsersController : BaseController
    {
        private readonly IUserContextService _userContextService;
        private readonly IssueService _issueService;

        public UsersController(IUserContextService userContextService, IssueService issueService)
        {
            _userContextService = userContextService;
            _issueService = issueService;
        }

        [HttpGet("me")]
        public Task<BL.Model.UserContext> GetContext() =>
           _userContextService.GetInfo(User.Identity.Name!);

        [HttpGet("me/issues")]
        public Task<List<IssueListlDTO>> GetMyIssues() =>
            _issueService.GetAll(User.Identity.Name!);
    }
}
