// <summary>
// DoIT: A better IT Management experience for small teams.
// </summary>
// <copyright file="TicketProvider.cs" company="Nicholas A Young">
// Copyright (C) 2021 Nicholas A Young
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 2.1 of the License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
// </copyright>

namespace IT.Shared.Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using IT.Shared.Clients;
    using IT.Shared.Devices;
    using IT.Shared.Problems;
    using IT.Shared.Ticketing;

    /// <summary>
    /// Provides a simple interface for querying tickets and ticket details from a database. 
    /// </summary>
    public static class TicketProvider
    {
        /// <summary>
        /// Gets a List{Contact} containing all ticket requestors.
        /// </summary>
        /// <param name="ticketNumber">The ticket number who's requestors you wish to retrieve. </param>
        /// <returns>A List{Contact} containing the tickets requestors.</returns>
        internal static List<Contact> GetRequestersByTicketNumber(ulong ticketNumber) => throw new NotImplementedException();

        internal static List<TicketReply> GetRepliesByTicketNumber(ulong ticketNumber)
        {
            throw new NotImplementedException();
        }

        internal static List<Department> GetDepartmentsByTicketNumber(ulong ticketNumber)
        {
            throw new NotImplementedException();
        }

        internal static List<TicketDomain> GetDomainsByTicketNumber(ulong id)
        {
            throw new NotImplementedException();
        }

        internal static List<Problem> GetProblemsByTicketNumber(ulong id)
        {
            throw new NotImplementedException();
        }

        internal static List<Device> GetDevicesByTicketNumber(ulong id)
        {
            throw new NotImplementedException();
        }
    }
}
