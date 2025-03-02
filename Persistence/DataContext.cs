using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Domain.Activity> Activities { get; set; }
    }
}
