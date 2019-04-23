using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace PalmyWeatherServices.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public ActionResult Get()
        {
            List<TemperatureItem> results = DB.Temperatures();

            return Json(results);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        { 
            return "value";
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody]TemperatureItem item)
        { 
            try
            {
                if (!item.TempInside.HasValue && !item.TempOutside.HasValue)
                {
                    DB.Log("Item malformed, please check your payload.", "Error");
                    return BadRequest();
                }
                int id = DB.AddTemperatureItem(item);

                if (id > 0)
                {
                    return Ok(id);
                }
                else
                {
                    DB.Log("Unable to insert item.", "Error");
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                DB.Log(ex.ToString(), "Error");
                return new StatusCodeResult(500);
            }

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
