using Volo.Abp.Modularity;

namespace Nic.Octopus
{
    [DependsOn(
        typeof(OctopusApplicationModule),
        typeof(OctopusDomainTestModule)
        )]
    public class OctopusApplicationTestModule : AbpModule
    {

    }
}