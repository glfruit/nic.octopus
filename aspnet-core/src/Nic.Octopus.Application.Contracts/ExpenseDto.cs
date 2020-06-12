using System;
using Nic.Octopus.Domain.Shared;
using Volo.Abp.Application.Dtos;

namespace Nic.Octopus.Application.Contracts
{
    public class ExpenseDto : AuditedEntityDto<Guid>
    {
        public string Title { get; set; }

        public DateTime OnDate { get; set; }

        public ExpenseType Type { get; set; }

        public float Amount { get; set; }
    }
}