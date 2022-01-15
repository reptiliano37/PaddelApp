/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayerTraining = /* GraphQL */ `
  mutation CreatePlayerTraining(
    $input: CreatePlayerTrainingInput!
    $condition: ModelPlayerTrainingConditionInput
  ) {
    createPlayerTraining(input: $input, condition: $condition) {
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
export const updatePlayerTraining = /* GraphQL */ `
  mutation UpdatePlayerTraining(
    $input: UpdatePlayerTrainingInput!
    $condition: ModelPlayerTrainingConditionInput
  ) {
    updatePlayerTraining(input: $input, condition: $condition) {
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
export const deletePlayerTraining = /* GraphQL */ `
  mutation DeletePlayerTraining(
    $input: DeletePlayerTrainingInput!
    $condition: ModelPlayerTrainingConditionInput
  ) {
    deletePlayerTraining(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
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
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $input: UpdateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    updateTraining(input: $input, condition: $condition) {
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
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $input: DeleteTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    deleteTraining(input: $input, condition: $condition) {
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
