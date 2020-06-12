using Nic.Octopus.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Nic.Octopus.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class OctopusController : AbpController
    {
        protected OctopusController()
        {
            LocalizationResource = typeof(OctopusResource);
        }
    }
}