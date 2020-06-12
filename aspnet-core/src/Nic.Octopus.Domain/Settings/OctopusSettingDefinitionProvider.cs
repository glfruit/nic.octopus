using Volo.Abp.Settings;

namespace Nic.Octopus.Settings
{
    public class OctopusSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(OctopusSettings.MySetting1));
        }
    }
}
