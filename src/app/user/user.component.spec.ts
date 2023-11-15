import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('ProfileComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render profile details when userDetails input is provided', () => {
    const mockUserDetails = {
      avatar_url: 'https://avatars3.githubusercontent.com/u/123456789?v=4',
      name: 'John Doe',
      login: 'johndoe',
      bio: 'This is a test bio.',
      location: 'Oriando',
      twitter_username: 'johndoe',
      html_url: 'https://github.com/johndoe'
    };

    component.userDetails = mockUserDetails;
    fixture.detectChanges();

    const profileContainer = fixture.nativeElement.querySelector('.flex.flex-col.md:flex-row.items-center.mb-4.justify-center.gap-8');
    expect(profileContainer).toBeTruthy();

    const avatarImage = profileContainer.querySelector('.rounded-full.shadow-2xl.p-2 img');
    expect(avatarImage).toBeTruthy();
    expect(avatarImage.src).toBe('https://avatars3.githubusercontent.com/u/123456789?v=4');

    const userDetailsSection = profileContainer.querySelector('.md:mr-4');
    expect(userDetailsSection).toBeTruthy();

    const nameElement = userDetailsSection.querySelector('.mb-2 p.text-2xl.font-semibold');
    expect(nameElement).toBeTruthy();
    expect(nameElement.textContent).toBe('John Doe');

    const bioElement = userDetailsSection.querySelector('.text-gray-800.text-base');
    expect(bioElement).toBeTruthy();
    expect(bioElement.textContent).toBe('This is a test bio.');

    const locationElement = userDetailsSection.querySelector('p');
    expect(locationElement).toBeTruthy();
    expect(locationElement.textContent).toBe('Oriando');

    const twitterElement = userDetailsSection.querySelector('p *ngIf="userDetails.twitter_username" a');
    expect(twitterElement).toBeTruthy();
    expect(twitterElement.textContent).toBe('@johndoe');
    expect(twitterElement.href).toBe('https://twitter.com/johndoe');

    const loginElement = userDetailsSection.querySelector('.mb-2 p.text-slate-800 a');
    expect(loginElement).toBeTruthy();
    expect(loginElement.textContent).toBe('johndoe');
    expect(loginElement.href).toBe('https://github.com/johndoe');
  });
});
