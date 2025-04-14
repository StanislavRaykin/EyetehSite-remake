﻿namespace DahuaSiteBootstrap.ViewModels
{
    public class MailModel
    {
        public string Name { get; set; }

        public string? Email { get; set; }

        public string Subject { get; set; } = null!;

        public string Message { get; set; } = null!;

        public string To { get; set; }
    }
}
