using AutoMapper;
using Nic.Octopus.Application.Contracts;
using Nic.Octopus.Domain.Entities;

namespace Nic.Octopus
{
    public class OctopusApplicationAutoMapperProfile : Profile
    {
        public OctopusApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */
             CreateMap<Expense, ExpenseDto>();
             CreateMap<CreateUpdateExpenseDto, Expense>();
        }
    }
}
