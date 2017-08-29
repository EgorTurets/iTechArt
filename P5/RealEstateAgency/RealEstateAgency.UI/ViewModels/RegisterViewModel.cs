using System.ComponentModel.DataAnnotations;

namespace RealEstateAgency.UI.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage ="FirstName is required")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "LirstName is required")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(8, ErrorMessage = "Password must be longer than 8 characters!")]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Password is not confirmed!")]
        public string Confirm { get; set; }
    }
}