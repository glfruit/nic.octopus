using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace Nic.Octopus.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(OctopusHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class OctopusConsoleApiClientModule : AbpModule
    {
        
    }
}
