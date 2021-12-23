/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayerTraining = /* GraphQL */ `
  subscription OnCreatePlayerTraining {
    onCreatePlayerTraining {
      id
      trainingID
      playerUsername
      userUsername
      players
      game {
        id
        status
        owner
        players
        winner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        createdAt
        updatedAt
      }
      player {
        id
        cognitoID
        username
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdatePlayerTraining = /* GraphQL */ `
  subscription OnUpdatePlayerTraining {
    onUpdatePlayerTraining {
      id
      trainingID
      playerUsername
      userUsername
      players
      game {
        id
        status
        owner
        players
        winner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        createdAt
        updatedAt
      }
      player {
        id
        cognitoID
        username
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeletePlayerTraining = /* GraphQL */ `
  subscription OnDeletePlayerTraining {
    onDeletePlayerTraining {
      id
      trainingID
      playerUsername
      userUsername
      players
      game {
        id
        status
        owner
        players
        winner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        createdAt
        updatedAt
      }
      player {
        id
        cognitoID
        username
        name
        email
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining {
    onCreateTraining {
      id
      status
      owner
      players
      winner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining {
    onUpdateTraining {
      id
      status
      owner
      players
      winner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining {
    onDeleteTraining {
      id
      status
      owner
      players
      winner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      cognitoID
      username
      name
      email
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
