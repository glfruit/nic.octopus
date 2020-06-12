using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Nic.Octopus.Data
{
    /* This is used if database provider does't define
     * IOctopusDbSchemaMigrator implementation.
     */
    public class NullOctopusDbSchemaMigrator : IOctopusDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}