using System;
using System.Threading.Tasks;
using Nic.Octopus.Domain.Entities;
using Nic.Octopus.Domain.Shared;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Guids;

namespace Nic.Octopus.Domain
{
    public class OctopusSeederContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<Expense, Guid> _expenseRepository;

        private readonly IGuidGenerator _guidGenerator;

        public OctopusSeederContributor(IRepository<Expense, Guid> expenseRepository, IGuidGenerator guidGenerator)
        {
            _expenseRepository = expenseRepository;
            _guidGenerator = guidGenerator;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (await _expenseRepository.GetCountAsync() > 0)
            {
                return;
            }

            await _expenseRepository.InsertAsync(
                new Expense(
                    id: _guidGenerator.Create(),
                    title: "油费",
                    type: ExpenseType.Traffic,
                    onDate: new DateTime(2020,6,12),
                    amount: 260
                )
            );

            await _expenseRepository.InsertAsync(
                new Expense(
                    id: _guidGenerator.Create(),
                    title: "Microsoft 365订阅",
                    type: ExpenseType.Subscription,
                    onDate: new DateTime(2020,6,11),
                    amount: 215
                )
            );
        }
    }
}