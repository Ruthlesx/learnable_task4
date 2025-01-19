


class Hotel {

    //Static propertiec
    static totalRooms = 50;
    static availableRooms = 42;
    static rooms = []

    constructor(name, location, rooms) {
        this.name = name;
        this.location = location;

    }

    addRoom(room) {
      Hotel.rooms.push(room);
      Hotel.totalRooms++;
      if (room.isAvailable) Hotel.availableRooms++;
      console.log(`Room ${room.roomNumber} has been added.`)
    }

    viewRooms() {
        console.log(`Total rooms: ${Hotel.totalRooms}, Available rooms: ${Hotel.availableRooms}`)
    }

}


class Guest {

    static totalGuests = 0;


    constructor (name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact
    }

    register() {
        console.log(`${this.name} has been registered successfully`)
    }

    login() {
        console.log(`${this.name} has been logged in `)
    }

    viewBooking(bookings) {
        console.log(`Bookings for ${this.name}:`, bookings)
    }
}


//Room class 

class Room {

    static roomCount = 0;

    constructor (roomNumber, roomType, pricePerNight, isAvailable = true) {
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
        Room.roomCount++;
    }

    checkAvailability() {
        return this.isAvailable
    }


    updateDetails(roomType, pricePerNight) {
        this.roomType = roomType;
        this.pricePerNight = pricePerNight;
        console.log("Room details updated successfully.");
    }
}


//Booking class

class Booking {

    static bookingCount = 0;

    constructor (guest, room, checkInDate, checkOutDate, status = "Confirmed" ) {
        this.guest = guest;
        this.room = room;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.status = status;
        Booking.bookingCount++

    }

    makeBooking() {
        if(this.room.checkAvailability()) {
            this.room.isAvailable = false;
            Hotel.availableRooms--;
            console.log(`Booking confirmed for ${this.guest.name}.`)
        } else {
            console.log("Room is not available.")
        }
    }

    cancelBooking() {
        this.status = 'Cancelled';
        this.room.isAvailable = true;
        Hotel.availableRooms++;
        console.log("Booking has been cancelled.")
    }

    updateBooking(checkInDate, checkOutDate) {
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        console.log("Booking details updated.")
    }

}


    //Payment class 
    class Payment {

        static paymentHistory = []

        constructor(paymentId, amount, paymentDate, status) {
            this.paymentId = paymentId;
            this.amount = amount;
            this.paymentDate = paymentDate;
            this.status = status;
            Payment.paymentHistory.push(this)
            
        }

        processPayment() {
            console.log(`Payment of $${this.amount} processed successfully. `)
        }

        refundPayment() {
            console.log(`Payment of $${this.amount} has been refunded`);
            this.status = "Refunded"
        }
    }


    class Admin {

        static totalAdmins = 0;

        constructor(name, email, contact) {
            this.name = name;
            this.email = email;
            this.contact = contact;
            Admin.totalAdmins++;
        }

        addRoom(room) {
            Hotel.rooms.push(room);
            Hotel.totalRooms++;
            if (room.isAvailable) Hotel.availableRooms++
            console.log(`Room ${rooms.roomNumber} has been added. `)
        }

        removeRoom(roomNumber) {
            const index = Hotel.rooms.findIndex((room) => room.roomNumber  === roomNumber);
            if (index !== -1) {
                const [removedRoom] = Hotel.rooms.splice(index, 1)
                Hotel.totalRooms--;
                if (removedRoom.isAvailable) Hotel.availableRooms--;
                console.log(`Room with number ${roomNumber} has been removed.`)
            } else {
                console.log("Room not found")
            }
        }

        viewReports(bookings) {
            console.log("Admin reports:", bookings);
        }
    }



    //Create Guest
    const guest1 = new Guest('John Shaft', "johnshaft504@gmail.com", 2349139856734 )
    const guest2 = new Guest('Jane Doe', "janedoe678@gmail.com", 8529376412345 )
    guest1.register()
    guest2.register()

    console.log(guest1)


    //Create Rooms
    const room1 = new Room("101", "Single", "$55",true )
    const room2 = new Room("102", "Deluxe Suite", "$250", false)
    room2.updateDetails("suite", "$200")
   
    

    // Create Booking
    const booking1 = new Booking( guest1, room1, "2025-01-20", "2025-01-25");
    const booking2 = new Booking(guest2, room2, "2025-01-10", "2025-01-15");
    booking1.makeBooking();
    booking2.makeBooking();

    //Process Payment
    const payment1 = new Payment(1, 500, "2025-01-15",);
    payment1.processPayment();