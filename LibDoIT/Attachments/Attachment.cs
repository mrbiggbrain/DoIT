using IT.Shared.Ticketing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IT.Shared.Attachments
{
    public class Attachment
    {
        public ulong Id { get; }

        public List<TicketReply> TicketReplies { get; }

        public List<AttachmentACL> ACLs { get; }

        public string Name { get; }

        public string StorageID { get; }

        public List<AttachmentComment> Comments { get; }
    }
}
