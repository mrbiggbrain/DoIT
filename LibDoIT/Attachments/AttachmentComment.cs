using IT.Shared.Accounts;

namespace IT.Shared.Attachments
{
    public class AttachmentComment
    {
        public ulong Id { get; }

        public Attachment Parent { get; }

        public string Title { get; }

        public User Author { get; }

        public string Content { get; }
    }
}