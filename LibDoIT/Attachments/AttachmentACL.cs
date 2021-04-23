using System.Collections.Generic;

namespace IT.Shared.Attachments
{
    public class AttachmentACL
    {
        public ulong Id { get; }

        public Attachment Attachment { get; }

        public List<AttachmentACLNotes> Notes { get; }
    }
}