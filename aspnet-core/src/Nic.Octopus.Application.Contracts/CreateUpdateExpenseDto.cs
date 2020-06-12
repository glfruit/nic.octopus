using System;
using System.ComponentModel.DataAnnotations;
using Nic.Octopus.Domain.Shared;

namespace Nic.Octopus.Application.Contracts
{
    public class CreateUpdateExpenseDto
    {
        [Required]
        [StringLength(128)]
        public string Title { get; set; }

        [Required]
        public DateTime OnDate { get; set; }

        [Required]
        public ExpenseType Type { get; set; }

        [Required]
        public float Amount { get; set; }
    }
}