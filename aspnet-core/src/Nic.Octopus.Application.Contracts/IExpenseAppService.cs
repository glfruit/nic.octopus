using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Nic.Octopus.Application.Contracts
{
    public interface IExpenseAppService : ICrudAppService<ExpenseDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateExpenseDto, CreateUpdateExpenseDto>
    {
         
    }
}