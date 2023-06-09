﻿// <summary>
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

using System.Collections.Generic;

namespace IT.Shared.Ticketing
{
    public class TicketPriority
    {
        public ulong Id { get; }

        public short Seriousness { get; }

        public string Code { get; }

        public string Name { get; }

        public string Description { get; }

        public List<Ticket> Tickets { get; }

        public 
    }
}