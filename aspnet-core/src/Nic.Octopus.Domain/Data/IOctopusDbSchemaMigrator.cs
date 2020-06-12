using System.Threading.Tasks;

namespace Nic.Octopus.Data
{
    public interface IOctopusDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
