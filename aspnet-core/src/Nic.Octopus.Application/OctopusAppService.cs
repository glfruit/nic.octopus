using System;
using System.Collections.Generic;
using System.Text;
using Nic.Octopus.Localization;
using Volo.Abp.Application.Services;

namespace Nic.Octopus
{
    /* Inherit your application services from this class.
     */
    public abstract class OctopusAppService : ApplicationService
    {
        protected OctopusAppService()
        {
            LocalizationResource = typeof(OctopusResource);
        }
    }
}
