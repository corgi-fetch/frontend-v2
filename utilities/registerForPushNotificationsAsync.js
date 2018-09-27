import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = global.urlBase + '/api/' + global.id + '/user/';

async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log("we are here in registerforPush Notifications " + token);

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  return fetch(global.urlBase + '/api/' + global.id + '/user', {
    method: "put",
    credentials: "same-origin",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        userId: global.id,
        pushToken: token,
    })
    })
    .then( (response) => {
        console.log(response);
    });
}

export default registerForPushNotificationsAsync;