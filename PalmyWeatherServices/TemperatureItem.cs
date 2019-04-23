using System;
namespace PalmyWeatherServices
{
    public class TemperatureItem
    {
        public TemperatureItem()
        {
        }

        public decimal? TempInside { get; set; }
        public decimal? TempOutside { get; set; }
        public DateTime Created { get; set; }
    }
}
