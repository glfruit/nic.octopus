using System;
using Nic.Octopus.Domain.Shared;
using Volo.Abp.Domain.Entities.Auditing;

namespace Nic.Octopus.Domain.Entities
{
    public class Expense : AuditedAggregateRoot<Guid>
    {
        // 支出项
        public string Title { get; set; }

        public ExpenseType Type { get; set; }

        // 支出时间
        public DateTime OnDate { get; set; }

        // 支出金额
        public float Amount { get; set; }

        protected Expense()
        {            
        }

        public Expense(Guid id, string title, ExpenseType type, DateTime onDate, float amount) : base(id)
        {
            Title = title;
            Type = type;
            OnDate = onDate;
            Amount = amount;
        }
    }
}