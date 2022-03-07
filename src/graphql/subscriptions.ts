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
export const onCreatePista = /* GraphQL */ `
  subscription OnCreatePista($owners: String) {
    onCreatePista(owners: $owners) {
      id
      numeroPista
      createdAt
      updatedAt
      owners
      dias {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePista = /* GraphQL */ `
  subscription OnUpdatePista($owners: String) {
    onUpdatePista(owners: $owners) {
      id
      numeroPista
      createdAt
      updatedAt
      owners
      dias {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onDeletePista = /* GraphQL */ `
  subscription OnDeletePista($owners: String) {
    onDeletePista(owners: $owners) {
      id
      numeroPista
      createdAt
      updatedAt
      owners
      dias {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const onCreateReservaPista = /* GraphQL */ `
  subscription OnCreateReservaPista($owners: String) {
    onCreateReservaPista(owners: $owners) {
      id
      courtNumber
      dateString
      createdAt
      hora
      playerUsername
      updatedAt
      court {
        id
        numeroPista
        createdAt
        updatedAt
        owners
        dias {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        pistas {
          nextToken
        }
        owners
      }
    }
  }
`;
export const onUpdateReservaPista = /* GraphQL */ `
  subscription OnUpdateReservaPista($owners: String) {
    onUpdateReservaPista(owners: $owners) {
      id
      courtNumber
      dateString
      createdAt
      hora
      playerUsername
      updatedAt
      court {
        id
        numeroPista
        createdAt
        updatedAt
        owners
        dias {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        pistas {
          nextToken
        }
        owners
      }
    }
  }
`;
export const onDeleteReservaPista = /* GraphQL */ `
  subscription OnDeleteReservaPista($owners: String) {
    onDeleteReservaPista(owners: $owners) {
      id
      courtNumber
      dateString
      createdAt
      hora
      playerUsername
      updatedAt
      court {
        id
        numeroPista
        createdAt
        updatedAt
        owners
        dias {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        pistas {
          nextToken
        }
        owners
      }
    }
  }
`;
export const onCreateDia = /* GraphQL */ `
  subscription OnCreateDia($owners: String) {
    onCreateDia(owners: $owners) {
      id
      dateString
      createdAt
      updatedAt
      pistas {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
export const onUpdateDia = /* GraphQL */ `
  subscription OnUpdateDia($owners: String) {
    onUpdateDia(owners: $owners) {
      id
      dateString
      createdAt
      updatedAt
      pistas {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
export const onDeleteDia = /* GraphQL */ `
  subscription OnDeleteDia($owners: String) {
    onDeleteDia(owners: $owners) {
      id
      dateString
      createdAt
      updatedAt
      pistas {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
