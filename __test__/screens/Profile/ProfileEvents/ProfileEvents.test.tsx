import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

import { ProfileEvents } from '../../../../screens/Profile/ProfileEvents/ProfileEvents'

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    currentUser: {
      uid: 'test-user-id',
    },
  })),
}))

// Mock Navigation
const mockNavigation = {
  navigate: jest.fn(),
} as unknown as NavigationProp<ParamListBase>

jest.mock('@react-navigation/native', () => {
  return { 
    ...jest.requireActual('@react-navigation/native'), // keep all the original implementations
    useNavigation: () => mockNavigation,
  }
})

// Mock Data Fetching
jest.mock('../../../../firebase/ManageEvents', () => ({
  getAllFutureEvents: jest.fn(() => Promise.resolve([
    { uid: '1', title: 'Future Event 1' },
    { uid: '2', title: 'Future Event 2' },
  ])),
  getAllPastEvents: jest.fn(() => Promise.resolve([
    { uid: '3', title: 'Past Event 1' },
    { uid: '4', title: 'Past Event 2' },
  ])),
}))

jest.mock('../../../../firebase/User', () => ({
  getUserData: jest.fn(() => Promise.resolve({
    events: ['1', '3'],
  })),
}))

jest.mock('../../../../components/ToastMessage/toast', () => ({
  showErrorToast: jest.fn(),
}))



describe('ProfileEvents', () => { 
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders EventScreen with userID', async () => {
    const { getByText } = render(

        <ProfileEvents />

    )
    await waitFor(() => {
      expect(getByText('Future Event 1')).toBeTruthy()

    })
  })

  it('navigates to ViewEvent when an event is pressed', async () => {
    const { getByText } = render(

        <ProfileEvents />

    )

    await waitFor(() => {
      fireEvent.press(getByText('Future Event 1'))
    expect(mockNavigation.navigate).toHaveBeenCalledWith('ViewEvent', { eventUid: '1' })

    })
  })

})