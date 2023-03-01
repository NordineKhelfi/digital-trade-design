import { NotificationInstance } from "antd/es/notification/interface";

export const registerContact = (values: any, notificationApi: NotificationInstance) => {
  let email = values.email;
  let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');

  if (contacts.includes(email)) {
    notificationApi['warning']({
      message: 'We already know you !',
      description:
        `You already got in touch with us with this same address: ${email}.`
    })
  } else {
    contacts.push(email);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    notificationApi['success']({
      message: 'Welcome to the family ! 🎉',
      description:
        `Someone from our team will get in touch with you soon. ✌`
    });
  }
};