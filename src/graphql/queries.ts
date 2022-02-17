/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($username: String!) {
    getPlayer(username: $username) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $username: String
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchPlayers = /* GraphQL */ `
  query SearchPlayers(
    $filter: SearchablePlayerFilterInput
    $sort: SearchablePlayerSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPlayers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
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
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourt = /* GraphQL */ `
  query GetCourt($courtNumber: String!) {
    getCourt(courtNumber: $courtNumber) {
      id
      courtNumber
      createdAt
      updatedAt
      owners
      days {
        items {
          id
          courtNumber
          dateString
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const listCourts = /* GraphQL */ `
  query ListCourts(
    $courtNumber: String
    $filter: ModelCourtFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCourts(
      courtNumber: $courtNumber
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        courtNumber
        createdAt
        updatedAt
        owners
        days {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
      id
      courtNumber
      dateString
      createdAt
      updatedAt
      owners
      hours {
        items {
          id
          status
          dateString
          hora
          playerUsername
          userUsername
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courtNumber
        dateString
        createdAt
        updatedAt
        owners
        hours {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getHour = /* GraphQL */ `
  query GetHour($id: ID!) {
    getHour(id: $id) {
      id
      status
      dateString
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
export const listHours = /* GraphQL */ `
  query ListHours(
    $filter: ModelHourFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHours(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        dateString
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
      nextToken
    }
  }
`;
