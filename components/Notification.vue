<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import type { NotificationProps } from "~/types/dashboard";

const notifications = ref<NotificationProps[]>([
  {
    title: "William Smith",
    id: '1',
    is_read: true,
    subject: "Meeting Tomorrow",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur pariatur, cumque explicabo nam veniam corrupti quaerat sed impedit molestiae numquam itaque atque asperiores dicta fugiat provident possimus eaque quam!",
    type: "info",
    created_at: "about 1 year ago",
  },
  {
    title: "Jane Doe",
    subject: "Project Deadline Reminder",
    message:
      "Don't forget that the project deadline is coming up next week. Please make sure all deliverables are ready before the final review.",
    type: "warning",
    created_at: "2 days ago",
    id: '2',
    is_read: true,
  },
  {
    title: "John Johnson",
    subject: "New Team Member",
    message:
      "We are excited to announce that Sarah Lee has joined our team as a software engineer. Please welcome her and help her settle in.",
    type: "success",
    created_at: "1 week ago",
    id: '3',
    is_read: false,
  },
  {
    title: "Admin",
    subject: "System Maintenance",
    message:
      "Scheduled maintenance will occur this Saturday from 1 AM to 5 AM. Please save your work and log out beforehand to avoid data loss.",
    type: "error",
    created_at: "3 days ago",
    id: '4',
    is_read: false,
  },
  {
    title: "Marketing Team",
    subject: "Campaign Launch",
    message:
      "Our new marketing campaign will go live tomorrow morning. Please review the final materials and provide any feedback before EOD.",
    type: "info",
    created_at: "6 hours ago",
    id: '5',
    is_read: true,
  },
  {
    title: "HR Department",
    subject: "Annual Leave Policy Update",
    message:
      "Please read the updated annual leave policy, which is now available on the company intranet. Let us know if you have any questions.",
    type: "info",
    created_at: "2 weeks ago",
    id: '6',
    is_read: true,
  },
  {
    title: "Finance",
    subject: "Expense Report Submission",
    message:
      "Reminder: All expense reports for this quarter must be submitted by the end of this month. Late submissions will not be processed.",
    type: "warning",
    created_at: "4 days ago",
    id: '7',
    is_read: true,
  },
  {
    title: "Sarah Lee",
    subject: "Team Meeting Notes",
    message:
      "Here are the meeting notes from today's discussion. Let me know if there's anything I missed or if you need additional details.",
    type: "info",
    created_at: "30 minutes ago",
    id: '8',
    is_read: true,
  },
]);

</script>

<template>
  <div>
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <Icon
            icon="mdi:notifications-none"
            class="text-slate-950 dark:text-slate-100 dark:hover:text-slate-200"
          ></Icon>
        </Button>
      </SheetTrigger>

      <NotificationSheet :data="notifications"></NotificationSheet>
    </Sheet>
  </div>
</template>
