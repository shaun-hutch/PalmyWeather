using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Data;
namespace PalmyWeatherServices
{
    public class DB
    {
        private static string constring = "Data Source=HUTCHHOST; Initial Catalog=Hutch; User Id=webuser; Password=password12;";

        public DB()
        {
        }

        public static List<TemperatureItem> Temperatures()
        {
            List<TemperatureItem> results = new List<TemperatureItem>();

            try
            {
                using (SqlConnection con = new SqlConnection(constring))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = con;
                        cmd.Connection.Open();
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "Temperature_Select_All";
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                results.Add(new TemperatureItem()
                                {
                                    TempInside = decimal.Parse(reader["TempInside"].ToString()),
                                    TempOutside = decimal.Parse(reader["TempOutside"].ToString()),
                                    Created = DateTime.Parse(reader["Created"].ToString())
                                });
                            }
                        }
                        cmd.Connection.Close();
                    }
                }
            }
            catch (SqlException ex)
            {
                Console.WriteLine(ex.ToString());
                throw ex;
            }

            return results;
        }

        public static int AddTemperatureItem(TemperatureItem item)
        {
            int inserted = 0;
            try
            {
                using (SqlConnection con = new SqlConnection(constring))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = con;
                        cmd.Connection.Open();
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "Temperature_Insert";
                        cmd.Parameters.AddWithValue("@TempInside", item.TempInside);
                        cmd.Parameters.AddWithValue("@TempOutside", item.TempOutside);
                        inserted = Convert.ToInt32(cmd.ExecuteScalar());
                        cmd.Connection.Close();
                    }
                }
            }
            catch (SqlException ex)
            {
                Console.WriteLine(ex.ToString());
                throw ex;
            }

            return inserted;
        }
    }
}
