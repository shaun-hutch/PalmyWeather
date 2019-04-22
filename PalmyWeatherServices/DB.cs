using System;
using System.Data.SqlClient;
using System.Collections.Generic;
namespace PalmyWeatherServices
{
    public class DB
    {
        private static string constring = "Data Source=HUTCHHOST; Initial Catalog=Hutch; User Id=webuser; Password=password12;";

        public DB()
        {
        }

        public static List<TemperatureItem> Test()
        {
            SqlConnection con = new SqlConnection(constring);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.Connection.Open();
            cmd.CommandText = "SELECT * FROM tblTemperature";
            SqlDataReader reader = cmd.ExecuteReader(); 


            List<TemperatureItem> results = new List<TemperatureItem>();
            while (reader.Read())
            {
                results.Add(new TemperatureItem()
                {
                    TempInside = decimal.Parse(reader["TempInside"].ToString()),
                    TempOutside = decimal.Parse(reader["TempOutside"].ToString()),
                    Created = DateTime.Parse(reader["Created"].ToString())
                });
            }

            return results;
        }



    }
}
