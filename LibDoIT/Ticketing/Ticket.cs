// <summary>
// DoIT: A better IT Management experience for small teams.
// </summary>
// <copyright file="Ticket.cs" company="Nicholas A Young">
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

namespace IT.Shared.Ticketing
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using IT.Shared.Clients;
    using IT.Shared.Data;
    using IT.Shared.Devices;
    using IT.Shared.Problems;

    /// <summary>
    /// Represents a ticket in the system.
    /// </summary>
    public class Ticket
    {
        /// <summary>
        /// Gets the unique identifier for the ticket. 
        /// </summary>
        public ulong Id { get; }

        public string Title { get; }

        public DateTime OpenDate { get; }

        public TicketStatus Status { get; }

        public TicketPriority Priority { get; }

        public TicketImpact Impact { get; }

        public TicketType Type { get; }

        /// <summary>
        /// Gets the list of requesters attached to the ticket.
        /// </summary>
        public List<Contact> Requesters
        {
            get
            {
                return TicketProvider.GetRequestersByTicketNumber(this.Id);
            }
        }

        /// <summary>
        /// Gets the list of replies for the ticket. 
        /// </summary>
        public List<TicketReply> Replies
        {
            get
            {
                return TicketProvider.GetRepliesByTicketNumber(this.Id);
            }
        }

        public List<Department> Departments
        {
            get
            {
                return TicketProvider.GetDepartmentsByTicketNumber(this.Id);
            }
        }

        public List<TicketDomain> Domain
        {
            get
            {
                return TicketProvider.GetDomainsByTicketNumber(this.Id);
            }
        }

        public List<Problem> Problems
        {
            get
            {
                return TicketProvider.GetProblemsByTicketNumber(this.Id);
            }
        }

        public List<Device> Devices
        {
            get
            {
                return TicketProvider.GetDevicesByTicketNumber(this.Id);
            }
        }
    }
} 