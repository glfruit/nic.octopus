using MongoDB.Driver;
using Nic.Octopus.Domain.Entities;
using Nic.Octopus.Users;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace Nic.Octopus.MongoDB
{
    [ConnectionStringName("Default")]
    public class OctopusMongoDbContext : AbpMongoDbContext
    {
        public IMongoCollection<AppUser> Users => Collection<AppUser>();

        public IMongoCollection<Expense> Expenses => Collection<Expense>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.Entity<AppUser>(b =>
            {
                /* Sharing the same "AbpUsers" collection
                 * with the Identity module's IdentityUser class. */
                b.CollectionName = "AbpUsers";
            });
        }
    }
}
