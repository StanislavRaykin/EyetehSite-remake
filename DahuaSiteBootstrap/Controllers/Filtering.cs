using DahuaSiteBootstrap.Model;
using DahuaSiteBootstrap.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DahuaSiteBootstrap.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Filtering : ControllerBase
    {
        // GET: api/<Filtering>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<Filtering>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<Filtering>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<Filtering>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<Filtering>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
        [HttpPost("term")]
        public async Task Search(string term,List<object> items)
        {
            var json = JsonSerializer.Serialize(items);

            OwnerData data = new OwnerData() {
                files = JsonSerializer.Deserialize<ICollection<Dsfile>>(json),
            };

            data.Search(term);
        }
    }
}
