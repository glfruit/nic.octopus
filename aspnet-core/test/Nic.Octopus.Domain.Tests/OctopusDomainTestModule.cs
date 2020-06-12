using Nic.Octopus.MongoDB;
using Volo.Abp.Modularity;

namespace Nic.Octopus
{
    [DependsOn(
        typeof(OctopusMongoDbTestModule)
        )]
    public class OctopusDomainTestModule : AbpModule
    {

    }
}