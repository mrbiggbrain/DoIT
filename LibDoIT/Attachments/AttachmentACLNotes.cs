using IT.Shared.Accounts;

namespace IT.Shared.Attachments
{
    public class AttachmentACLNotes
    {
        public ulong Id { get; }

        public AttachmentACL ACL { get; }

        public string Title { get; }

        public string Content { get; }

        public User Author { get; }
    }
}