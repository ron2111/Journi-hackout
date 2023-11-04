import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Navigation from './components/Navigation/Navigation';
import FuturePage from './pages/FuturePage';
import { useLocalStorage } from 'usehooks-ts';
import HomePage from './pages/HomePage';
import Map from './pages/Map/Map';
import { useState } from 'react';

function App() {
  const [futureTrips, setFutureTrips] = useLocalStorage('trips', []);
  const [history, setHistory] = useLocalStorage('history', []);
  const [locationInfos, setLocationInfos] = useState('');
  const [viewPort, setViewPort] = useState('');

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onHandleNewNote={handleNewNote}
              onDeleteNote={handleDeleteNote}
              history={history}
              trips={futureTrips}
              savePicture={handleSavePicture}
              onViewPort={handleViewPort}
              onEditNotes={handleEditNotes}
            />
          }
        />
        <Route
          path="/formPage"
          element={
            <FormPage onCreateTrip={createTrip} locationInfos={locationInfos} />
          }
        />
        <Route
          path="/futurePage"
          element={
            <FuturePage
              trips={futureTrips}
              onDeleteCard={handleDeleteCard}
              onFinishTrip={handleFinishTrip}
              onEdit={handleEdit}
              onViewPort={handleViewPort}
            />
          }
        />
        <Route
          path="/mapPage"
          element={
            <Map
              onPopupClick={handlePopupClick}
              futureTrips={futureTrips}
              history={history}
              viewPort={viewPort}
            />
          }
        />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </Wrapper>
  );

  function handleViewPort(coordinates) {
    setViewPort(coordinates);
  }

  function handlePopupClick(locationInfos) {
    setLocationInfos(locationInfos);
  }

  function handleEditNotes(updatedValue) {
    const updatedArray = history.map(note => {
      const newNotes = note.notes.map(note => {
        if (note._id === updatedValue._id) {
          return updatedValue;
        }
        return note;
      });
      return { ...note, notes: newNotes };
    });
    setHistory(updatedArray);
  }

  function handleDeleteNote(noteId) {
    setHistory(
      history.map(card => {
        const filteredNotes = card.notes.filter(note => note._id !== noteId);
        return { ...card, notes: filteredNotes };
      })
    );
  }

  function handleEdit(updatedValue) {
    const newContent = futureTrips.map(trip => {
      if (trip._id === updatedValue._id) {
        const newTripContent = { ...trip, ...updatedValue };
        return newTripContent;
      }
      return trip;
    });
    setFutureTrips(newContent);
  }

  function handleFinishTrip(
    startDate,
    endDate,
    destination,
    textNotes,
    _id,
    coordinates
  ) {
    setHistory([
      {
        startDate,
        endDate,
        destination,
        textNotes,
        _id,
        coordinates,
      },
      ...history,
    ]);
    setFutureTrips(futureTrips.filter(trip => trip._id !== _id));
    navigate('./');
  }

  function handleSavePicture(picture, _id) {
    setHistory(
      history.map(card => {
        if (card._id === _id) {
          return { ...card, picture };
        } else {
          return card;
        }
      })
    );
  }

  function handleDeleteCard(tripId) {
    setFutureTrips(futureTrips.filter(trip => trip._id !== tripId));
  }

  function createTrip(formData) {
    setFutureTrips([...futureTrips, formData]);
    navigate('/futurePage');
    setLocationInfos('');
  }

  function handleNewNote(note, _id) {
    const newNote = { ...note, _id: nanoid() };
    setHistory(
      history.map(el => {
        if (el._id === _id) {
          const notes = el.notes ? [...el.notes, newNote] : [newNote];
          return { ...el, notes };
        }
        return el;
      })
    );
  }
}

const Wrapper = styled.div`
  padding-bottom: 10vh;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default App;
