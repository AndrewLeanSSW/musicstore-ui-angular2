﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SSW.MusicStore.Models;

namespace SSW.MusicStore.Services.Query
{
    public interface IGenreQueryService
    {
		/// <summary>
		/// Gets all genres
		/// </summary>
		/// <returns>List of genres</returns>
	    Task<IEnumerable<Genre>> GetAllGenres();
    }
}
