using System;
using Nic.Octopus.Application.Contracts;
using Nic.Octopus.Domain.Entities;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Nic.Octopus.Application
{
    public class ExpenseService : CrudAppService<Expense, ExpenseDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateExpenseDto, CreateUpdateExpenseDto>,
        IExpenseAppService
    {
        public ExpenseService(IRepository<Expense, Guid> repository) : base(repository)
        {
            
        }
    }
}