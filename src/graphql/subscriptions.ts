/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onCreatePlayerTraining = /* GraphQL */ `
  subscription OnCreatePlayerTraining($owners: String) {
    onCreatePlayerTraining(owners: $owners) {
      id
      trainingID
      createdAt
      playerUsername
      userUsername
      players
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
      training {
        id
        status
        trainer
        player
        owners
        winner
        hit
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const onUpdatePlayerTraining = /* GraphQL */ `
  subscription OnUpdatePlayerTraining($owners: String) {
    onUpdatePlayerTraining(owners: $owners) {
      id
      trainingID
      createdAt
      playerUsername
      userUsername
      players
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
      training {
        id
        status
        trainer
        player
        owners
        winner
        hit
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const onDeletePlayerTraining = /* GraphQL */ `
  subscription OnDeletePlayerTraining($owners: String) {
    onDeletePlayerTraining(owners: $owners) {
      id
      trainingID
      createdAt
      playerUsername
      userUsername
      players
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
      training {
        id
        status
        trainer
        player
        owners
        winner
        hit
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining($owners: String) {
    onCreateTraining(owners: $owners) {
      id
      status
      trainer
      player
      owners
      winner
      hit
      createdAt
      updatedAt
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining($owners: String) {
    onUpdateTraining(owners: $owners) {
      id
      status
      trainer
      player
      owners
      winner
      hit
      createdAt
      updatedAt
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining($owners: String) {
    onDeleteTraining(owners: $owners) {
      id
      status
      trainer
      player
      owners
      winner
      hit
      createdAt
      updatedAt
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onCreateCourt = /* GraphQL */ `
  subscription OnCreateCourt($owners: String) {
    onCreateCourt(owners: $owners) {
      id
      numeroPista
      day {
        id
        dateString
        hora {
          id
          status
          hora
          playerUsername
          userUsername
          createdAt
          updatedAt
          owners
        }
        createdAt
        updatedAt
        owners
      }
      createdAt
      updatedAt
      owners
    }
  }
`;
export const onUpdateCourt = /* GraphQL */ `
  subscription OnUpdateCourt($owners: String) {
    onUpdateCourt(owners: $owners) {
      id
      numeroPista
      day {
        id
        dateString
        hora {
          id
          status
          hora
          playerUsername
          userUsername
          createdAt
          updatedAt
          owners
        }
        createdAt
        updatedAt
        owners
      }
      createdAt
      updatedAt
      owners
    }
  }
`;
export const onDeleteCourt = /* GraphQL */ `
  subscription OnDeleteCourt($owners: String) {
    onDeleteCourt(owners: $owners) {
      id
      numeroPista
      day {
        id
        dateString
        hora {
          id
          status
          hora
          playerUsername
          userUsername
          createdAt
          updatedAt
          owners
        }
        createdAt
        updatedAt
        owners
      }
      createdAt
      updatedAt
      owners
    }
  }
`;
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($owners: String) {
    onCreateDay(owners: $owners) {
      id
      dateString
      hora {
        id
        status
        hora
        playerUsername
        userUsername
        createdAt
        updatedAt
        trainer {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        player {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        owners
      }
      createdAt
      updatedAt
      owners
    }
  }
`;
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($owners: String) {
    onUpdateDay(owners: $owners) {
      id
      dateString
      hora {
        id
        status
        hora
        playerUsername
        userUsername
        createdAt
        updatedAt
        trainer {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        player {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        owners
      }
      createdAt
      updatedAt
      owners
    }
  }
`;
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($owners: String) {
    onDeleteDay(owners: $owners) {
      id
      dateString
      hora {
        id
        status
        hora
        playerUsername
        userUsername
        createdAt
        updatedAt
        trainer {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        player {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        owners
      }
      createdAt
      updatedAt
      owners
    }
  }
`;
export const onCreateHour = /* GraphQL */ `
  subscription OnCreateHour($owners: String) {
    onCreateHour(owners: $owners) {
      id
      status
      hora
      playerUsername
      userUsername
      createdAt
      updatedAt
      trainer {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
    }
  }
`;
export const onUpdateHour = /* GraphQL */ `
  subscription OnUpdateHour($owners: String) {
    onUpdateHour(owners: $owners) {
      id
      status
      hora
      playerUsername
      userUsername
      createdAt
      updatedAt
      trainer {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
    }
  }
`;
export const onDeleteHour = /* GraphQL */ `
  subscription OnDeleteHour($owners: String) {
    onDeleteHour(owners: $owners) {
      id
      status
      hora
      playerUsername
      userUsername
      createdAt
      updatedAt
      trainer {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
    }
  }
`;
