using Nic.Octopus.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Nic.Octopus.Permissions
{
    public class OctopusPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(OctopusPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(OctopusPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<OctopusResource>(name);
        }
    }
}
