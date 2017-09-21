using System.ComponentModel.DataAnnotations;

namespace RealEstateAgency.UI.ViewModels
{
    public class ChangePassViewModel
    {
        [Required(ErrorMessage = "UserId is required")]
        public int UserId { get; set; }

        [Required(ErrorMessage = "ResetToken is required")]
        [StringLength(36, MinimumLength = 36, ErrorMessage = "Invalid token. Access is denied.")]
        public string ResetToken { get; set; }

        [Required]
        [MinLength(8, ErrorMessage = "Password must be longer than 8 characters!")]
        public string NewPassword { get; set; }
    }
}