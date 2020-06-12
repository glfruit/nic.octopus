using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace Nic.Octopus.MongoDB
{
    [DependsOn(
        typeof(OctopusTestBaseModule),
        typeof(OctopusMongoDbModule)
        )]
    public class OctopusMongoDbTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var connectionString = MongoDbFixture.ConnectionString.EnsureEndsWith('/') +
                                    "Db_" +		
                                    Guid.NewGuid().ToString("N");

            Configure<AbpDbConnectionOptions>(options =>
            {
                options.ConnectionStrings.Default = connectionString;
            });
        }
    }
}