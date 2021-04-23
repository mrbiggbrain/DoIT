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
    using IT.Shared.Accounts;
    using IT.Shared.Asset;
    using IT.Shared.Clients;
    using IT.Shared.Data;
    using IT.Shared.Devices;
    using IT.Shared.Problems;
    using IT.Shared.Project;
    using IT.Shared.Vendor;

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

        public TicketStatus Status { get; }

        public TicketPriority Priority { get; }

        public TicketImpact Impact { get; }

        public TicketType Type { get; }

        public TicketTimeTracker TimeTracker { get; }

        /// <summary>
        /// Gets the list of requesters attached to the ticket.
        /// </summary>
        public List<Contact> Requesters { get; }

        /// <summary>
        /// Gets the list of replies for the ticket. 
        /// </summary>
        public List<TicketReply> Replies { get; }

        public List<Department> Departments { get; }

        public List<TicketDomain> Domain { get; }

        public List<Problem> Problems { get; }

        public List<Device> Devices { get; }

        public List<TicketTag> Tags { get; }

        public List<TicketActivity> Activity { get; }

        public List<Tenant> Tenants { get; }

        public List<AssetRequest> AssetRequests { get; }

        public List<ServiceCall> ServiceCalls { get; }

        public List<Site> Sites { get; }

        public List<ProjectTask> Tasks { get; }

        public List<Project> Projects { get; }

        public List<User> Owners { get; }
    }
} 