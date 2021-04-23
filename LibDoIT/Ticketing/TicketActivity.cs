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

using IT.Shared.Data;
using System;
using System.Collections.Generic;

namespace IT.Shared.Ticketing
{
    public class TicketActivity
    {
        public ulong Id { get; }

        public DateTime Timestamp { get; }

        public TicketActivityType Type { get; }

        public List<TicketActivityNote> Notes { get; }
    }
}