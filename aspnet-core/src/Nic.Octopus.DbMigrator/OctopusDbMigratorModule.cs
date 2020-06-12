using Nic.Octopus.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Nic.Octopus.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(OctopusMongoDbModule),
        typeof(OctopusApplicationContractsModule)
        )]
    public class OctopusDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
