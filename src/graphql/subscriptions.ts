/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayerTraining = /* GraphQL */ `
  subscription OnCreatePlayerTraining {
    onCreatePlayerTraining {
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
        trainings {
          nextToken
        }
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
        trainings {
          nextToken
        }
        createdAt
        updatedAt
      }
      training {
        id
        status
        trainer
        owners
        winner
        hit
        users {
          nextToken
        }
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
        trainings {
          nextToken
        }
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
        trainings {
          nextToken
        }
        createdAt
        updatedAt
      }
      training {
        id
        status
        trainer
        owners
        winner
        hit
        users {
          nextToken
        }
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
        trainings {
          nextToken
        }
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
        trainings {
          nextToken
        }
        createdAt
        updatedAt
      }
      training {
        id
        status
        trainer
        owners
        winner
        hit
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      typeUser
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
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
      typeUser
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
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
      typeUser
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
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
      typeUser
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
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
      typeUser
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
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
      typeUser
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining($owners: String) {
    onCreateTraining(owners: $owners) {
      id
      status
      trainer
      owners
      winner
      hit
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining($owners: String) {
    onUpdateTraining(owners: $owners) {
      id
      status
      trainer
      owners
      winner
      hit
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining($owners: String) {
    onDeleteTraining(owners: $owners) {
      id
      status
      trainer
      owners
      winner
      hit
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
