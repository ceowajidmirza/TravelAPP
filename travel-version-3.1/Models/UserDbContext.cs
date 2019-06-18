//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace travel_version_3._1.Models
//{
//    public class UserDbContext : DbContext
//    {
//        public UserDbContext(DbContextOptions options) : base(options)
//        {
//        }
//        public DbSet<UserAccount> Accounts { get; set; }
//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            modelBuilder.Entity<UserAccount>().HasData(
//                new UserAccount() { UserID = 1, user_Fname = "John", user_Lname = "player", user_email = "Developer" },
//                new UserAccount() { UserID = 2, user_Fname = "Wajid", user_Lname = "Mirza", user_email = "Developer" }
//                );
//        }
//    }
//}
